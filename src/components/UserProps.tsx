type UserProps = {
  id: number;
  name: string;
  email: string;
  onDelete: (id:number) => void;
};

export default UserProps