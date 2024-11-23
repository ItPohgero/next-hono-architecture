import type { UserEntity } from "../entity/user.entity";
import type { UserRepository } from "../repository/user.repository";

export class UserUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(
		data: Omit<UserEntity, "id" | "createdAt" | "updatedAt">,
	): Promise<UserEntity> {
		return this.userRepository.create(data);
	}

	async getUsers(): Promise<UserEntity[]> {
		return this.userRepository.findAll();
	}
}
