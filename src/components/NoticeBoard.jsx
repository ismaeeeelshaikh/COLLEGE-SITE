import { notices, events } from '../data'

export default function NoticeBoard() {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl bg-white border shadow-sm">
        <div className="px-4 py-3 border-b font-semibold">Notices</div>
        <ul className="divide-y">
          {notices.map(n => (
            <li key={n.id} className="px-4 py-3 hover:bg-gray-50">
              <p className="text-sm">{n.text}</p>
              <p className="text-xs text-gray-500">{n.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white border shadow-sm">
        <div className="px-4 py-3 border-b font-semibold">Upcoming Events</div>
        <ul className="divide-y">
          {events.map(e => (
            <li key={e.id} className="px-4 py-3 hover:bg-gray-50">
              <p className="text-sm font-medium">{e.title}</p>
              <p className="text-xs text-gray-500">{e.date} • {e.venue}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
