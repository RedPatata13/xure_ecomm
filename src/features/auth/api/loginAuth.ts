export interface LoginInput {
    emailOrPhoneNumber : string;
    password : string; 
}

export async function loginUser(input: LoginInput) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        credentials: "include",
        body: JSON.stringify(input)
    });

    if(!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message ?? "Login failed");
    }

    return res.json();
}