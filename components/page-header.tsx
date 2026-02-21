interface PageHeaderProps {
  title: string
  subtitle?: string
  label?: string
}

export function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="bg-primary py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {label}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
