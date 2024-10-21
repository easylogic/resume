interface ResumeLayoutProps {
  children: React.ReactNode;
  theme: string;
}

const themes: { [key: string]: string } = {
  light: 'bg-white text-gray-900',
  dark: 'bg-gray-900 text-white',
  colorful: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'
}

export default function ResumeLayout({ children, theme }: ResumeLayoutProps) {
  const themeClass = themes[theme] || themes.light;

  return (
    <div className={`min-h-screen ${themeClass}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}
