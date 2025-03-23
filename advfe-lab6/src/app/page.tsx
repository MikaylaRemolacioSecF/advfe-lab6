import Link from "next/link";

export default function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>ID Form Validation</h1><br/>
            <p>Click below to access the form:</p><br/>
            <Link href="/form">
                <button style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px blue solid",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}>
                    Click to access form
                </button>
            </Link>
        </div>
    );
}
