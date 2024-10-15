import { Suspense } from "react";
import Loading from "../../loading";
import { notFound } from "next/navigation";
import { ViewTicketDetails } from "./ViewTicketDetails";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

interface Details {   
  id:string; 
}

export async function generateMetadata({ params }: { params: { id: string } })
{
  const supabase = createServerComponentClient({cookies})
  const {data:ticket} = await supabase.from('Tickets')
  .select()
  .eq('id', parseInt(params.id))
  .single()


  return {
    title: `Dojo Helpdesk | ${ticket?.title || 'Ticket not found'}`
  }
}

async function getTickets(id:string) {
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.from('Tickets')
                                      .select()
                                      .eq('id', parseInt(id))
                                      .single()
  
  if(!data)
  {
    notFound();
  }
  return data;
}
export async function TicketDetails({ params }: { params:{id: string} })
{
  debugger;
  const ticket = await getTickets(params.id);  
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session?.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <ViewTicketDetails ticket={ticket} />
      </Suspense>
    </main>
  );
}
export default TicketDetails;
