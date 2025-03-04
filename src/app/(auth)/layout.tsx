export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="authContainer" >
        <div className="container">
          {children}
        </div>
    </div>

  );
}
