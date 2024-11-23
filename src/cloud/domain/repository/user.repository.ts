import type { UserEntity } from "../entity/user.entity";

export interface UserRepository {
	create(user: Omit<UserEntity, "id" | "createdAt" | "updatedAt">): Promise<UserEntity>;
	findAll(): Promise<UserEntity[]>;
	findById(id: string): Promise<UserEntity | null>;
}
