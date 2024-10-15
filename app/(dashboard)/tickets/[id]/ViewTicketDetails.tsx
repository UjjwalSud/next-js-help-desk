
export async function ViewTicketDetails({ticket}:{ticket:any}) {
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

