export abstract class DBInterface {
  public abstract guestCreate<T extends Prisma.GuestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuestCreateArgs>
  ): Promise<Prisma.CheckSelect<T, Guest, Prisma.GuestGetPayload<T>> | null>;

  public abstract guestUpdate<T extends Prisma.GuestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuestUpdateArgs>
  ): Promise<Prisma.CheckSelect<T, Guest, Prisma.GuestGetPayload<T>> | null>;

  public abstract guestFindFirst<T extends Prisma.GuestFindFirstArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuestFindFirstArgs>
  ): Promise<Prisma.CheckSelect<T, Guest, Prisma.GuestGetPayload<T>> | null>;
}