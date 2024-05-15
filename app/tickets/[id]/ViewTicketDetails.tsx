import { notFound } from "next/navigation";
async function getTicket(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function ViewTicketDetails({ id }) {
  const ticket = await getTicket(id);

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <small>Created by {ticket.user_email}</small>
      <p>{ticket.body}</p>
      <div className={`pill ${ticket.priority}`}>
        {ticket.priority} priority
      </div>
    </div>
  );
}
