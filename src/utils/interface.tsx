export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface UserFormProps {
  userId?: string;
  onSuccess?: () => void;
}

export interface UserListProps {
  id: string;
  name: string;
  email: string;
}

export interface RegisterFormValue {
  username: string;
  email: string;
  password: string;
}
