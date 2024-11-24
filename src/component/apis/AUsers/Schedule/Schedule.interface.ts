export interface IEvent {
  id: number;
  userId: string;
  title: string;
  description: string;
  start: string;
  end: string;
  allDay: boolean;
  type: string;
  status: string;
  category: string;
  roadmapId: string;
  color: string;
}
