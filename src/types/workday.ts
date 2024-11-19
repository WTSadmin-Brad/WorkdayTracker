export type WorkStatus = 'fullDay' | 'halfDay' | 'offDay';

export interface Location {
  id: string;
  name: string;
  workWeek: number[]; // Array of day numbers (0-6) representing work days
}

export interface TruckInfo {
  id: string;
  number: string;
}

export interface CrewMember {
  id: string;
  name: string;
  role: 'bucketMan' | 'groundCrew';
}

export interface WorkdayEntry {
  id: string;
  date: string;
  status: WorkStatus;
  locationId: string;
  truckId?: string;
  notes?: string;
  crewMembers?: string[]; // Array of crew member IDs
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'bucketMan' | 'groundCrew';
  defaultLocationId?: string;
  defaultTruckId?: string;
}

export interface WorkdayContextType {
  entries: WorkdayEntry[];
  locations: Location[];
  trucks: TruckInfo[];
  crewMembers: CrewMember[];
  loading: boolean;
  error: Error | null;
  addEntry: (entry: Omit<WorkdayEntry, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateEntry: (id: string, entry: Partial<WorkdayEntry>) => Promise<void>;
  deleteEntry: (id: string) => Promise<void>;
}
