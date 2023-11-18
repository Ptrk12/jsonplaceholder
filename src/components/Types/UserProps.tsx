type UserProps = {
  id: number;
  name: string;
  email: string;
  onDelete?: (id:number) => void;
  onEdit: () => void;
};

export default UserProps