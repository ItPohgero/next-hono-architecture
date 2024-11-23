import { PrismaClient } from '@prisma/client'
import { UserRepository } from '../repository/user.repository'
import { UserEntity } from '../entity/user.entity'
// import prisma from '../config/prisma.client'

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