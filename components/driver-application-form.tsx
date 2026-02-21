"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle2, Upload } from "lucide-react"

const TOTAL_STEPS = 4
const stepLabels = [
  "Personal Info",
  "License Details",
  "Vehicle Info",
  "Consent & Submit",
]

interface FormData {
  fullName: string
  phone: string
  email: string
  address: string
  licenseNumber: string
  expiryDate: string
  yearsExperience: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  licenseFile: File | null
  insuranceFile: File | null
  backgroundConsent: boolean
}

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  licenseNumber: "",
  expiryDate: "",
  yearsExperience: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  licenseFile: null,
  insuranceFile: null,
  backgroundConsent: false,
}

export function DriverApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else if (type === "file") {
      const files = (e.target as HTMLInputElement).files
      setFormData((prev) => ({ ...prev, [name]: files?.[0] || null }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  function nextStep() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1)
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append("full_name", formData.fullName)
      data.append("phone", formData.phone)
      data.append("email", formData.email)
      data.append("address", formData.address)
      data.append("license_number", formData.licenseNumber)
      data.append("expiry_date", formData.expiryDate)
      data.append("years_experience", formData.yearsExperience)
      data.append("vehicle_make", formData.vehicleMake)
      data.append("vehicle_model", formData.vehicleModel)
      data.append("vehicle_year", formData.vehicleYear)
      data.append("background_consent", String(formData.backgroundConsent))
      if (formData.licenseFile) data.append("license_file", formData.licenseFile)
      if (formData.insuranceFile) data.append("insurance_file", formData.insuranceFile)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/apply/`,
        { method: "POST", body: data }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error(errorData)
        alert("Submission failed. Check console.")
        return
      }

      setSubmitted(true)
    } catch (error) {
      console.error(error)
      alert("Something went wrong.")
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-7 w-7 text-accent" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">Application Received</h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
          Your application has been received. Our team will review and contact you within 3-5 business days.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {stepLabels.map((label, index) => {
            const stepNum = index + 1
            const isActive = step === stepNum
            const isComplete = step > stepNum
            return (
              <div key={label} className="flex flex-1 flex-col items-center">
                <div className="flex items-center w-full">
                  {index > 0 && <div className={cn("h-0.5 flex-1", isComplete || isActive ? "bg-primary" : "bg-border")} />}
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                    isComplete || isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground border border-border"
                  )}>
                    {isComplete ? <CheckCircle2 className="h-4 w-4" /> : stepNum}
                  </div>
                  {index < stepLabels.length - 1 && <div className={cn("h-0.5 flex-1", isComplete ? "bg-primary" : "bg-border")} />}
                </div>
                <span className={cn("mt-2 text-xs font-medium hidden sm:block", isActive ? "text-foreground" : isComplete ? "text-primary" : "text-muted-foreground")}>{label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium">Full Name *</label>
            <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Phone *</label>
            <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Email *</label>
            <input name="email" value={formData.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Address *</label>
            <input name="address" value={formData.address} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium">Driver License Number *</label>
            <input name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Expiry Date *</label>
            <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Years Experience *</label>
            <select name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
              <option value="">Select experience</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium">Vehicle Make *</label>
            <input name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Vehicle Model *</label>
            <input name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Vehicle Year *</label>
            <input type="number" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} min={2000} max={2030} required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Upload Driver License *</label>
            <input type="file" name="licenseFile" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" required className="w-full border px-3 py-2 rounded" />
            <label className="block text-sm font-medium">Upload Insurance Document *</label>
            <input type="file" name="insuranceFile" onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png" required className="w-full border px-3 py-2 rounded" />
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <p>Please consent to background check *</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="backgroundConsent" checked={formData.backgroundConsent} onChange={handleChange} required />
              I consent to a background check and confirm information is accurate.
            </label>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="px-4 py-2 border rounded">Previous</button>
          ) : <div />}

          {step < TOTAL_STEPS ? (
            <button type="button" onClick={nextStep} className="px-4 py-2 bg-primary text-white rounded">Next</button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-accent text-white rounded">Submit Application</button>
          )}
        </div>
      </form>
    </div>
  )
}
