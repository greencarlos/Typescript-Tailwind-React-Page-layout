import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface PageLayoutProps {
  children: React.ReactNode
}

const Pagelayout:React.FC<PageLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Pagelayout
