import { BaseEntity } from "@/types/entity";

export type User = {
  id: number;
  name: string;
  email: string;
  role_id: number;
  role: string;
  branch_id: number;
  branch: string;
} & BaseEntity;

export type UserForm = {
  id?: number;
  name: string;
  email: string;
  password: string;
  role_id?: string;
  branch_id?: string | null;
};
