import { Suspense } from "react";
import Loading from "../../loading";
import ViewTicketDetails from "./ViewTicketDetails";

export default async function TicketDetails({ params }) {
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <Suspense fallback={<Loading />}>
        <ViewTicketDetails id={params.id} />
      </Suspense>
    </main>
  );
}
