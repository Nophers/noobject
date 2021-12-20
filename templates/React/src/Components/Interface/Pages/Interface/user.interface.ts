interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    changedAt: Date;
    removedAt: Date;
    deletedAt: Date;
    movedAt: Date;
    isActive: boolean;
    isDeleted: boolean;
    isMoved: boolean;
    isChanged: boolean;
    isRemoved: boolean;
}

export default User;
