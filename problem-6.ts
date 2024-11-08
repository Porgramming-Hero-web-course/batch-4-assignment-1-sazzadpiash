{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(oldProfile: Profile, newData: Partial<Profile>): Profile {
        return { ...oldProfile, ...newData };
    }
}