import { useEffect, useState } from "react";

function Profile({ user, setUser }) {

    const [passwordHash, setPasswordHash] = useState("");

    useEffect(()=> {
    console.log("This is the password hash", user)
            const fetchData = async () => {
                const res = await fetch(`http://localhost/user/${user.id}`,
                    {
                        "method": "GET",
                        "mode": "cors",
                        "headers": {
                            "Content-Type": "application/json"
                        }
                    }
                );
                const data = await res.json();
                setPasswordHash(data.msg.passwordHash);
                console.log("works!!!!!!!!")
                console.log(data)
                
            };
        if (user) {
            try {
                fetchData();
            } catch (error) {
                console.log(error);
            }
        }
        
        

    }, [user]);

    return (
        <div className="profile">
    <h1>Profile</h1>
    <h1>{user ? user.username : ""}</h1>
    <h1>{passwordHash}</h1>

    
    </div>

    );
}

export default Profile;