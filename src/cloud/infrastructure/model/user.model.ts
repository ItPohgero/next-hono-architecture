import { PrismaClient } from '@prisma/client'
import { UserEntity } from '../../domain/entity/user.entity'
import { UserRepository } from '../../domain/repository/user.repository'

const prisma = new PrismaClient()
export class UserModel implements UserRepository {
  async create(user: Omit<UserEntity, 'id' | 'createdAt' | 'updatedAt'>): Promise<UserEntity> {
    return prisma.user.create({ data: user })
  }

  async findAll(): Promise<UserEntity[]> {
    return await prisma.user.findMany()
  }

  async findById(id: string): Promise<UserEntity | null> {
    return prisma.user.findUnique({ where: { id } })
  }
}