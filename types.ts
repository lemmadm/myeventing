
export enum TicketType {
  FREE = 'Free',
  PAID = 'Paid',
}

export interface Ticket {
  id: string;
  name: string;
  type: TicketType;
  price: number;
}

export interface EventDetails {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  bannerImage: string | null;
  tickets: Ticket[];
}
