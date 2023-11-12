type PostProps = {
    id:number;
    userId: number;
    title: string;
    body: string;
    onDelete: (id:number) => void
}

export default PostProps