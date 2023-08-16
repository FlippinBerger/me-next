
export default function AlbumLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen items-center py-24 px-64">
      {children}
    </div>
  )
}
