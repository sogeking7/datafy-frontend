import { AccountForm } from "@/features/users/components/AccountForm";
import { Container } from "@/ui/Container";
import { LogoutBtn } from "@/features/auth/components/LogoutBtn";

export default async function Account() {
  return (
    <main>
      <Container>
        <h1 className="text-xl font-semibold mb-2">Account</h1>
        <p className="text-sm">
          {`This is your account dashboard. Here you can update your account information and more.`}
        </p>
        <AccountForm />
        <LogoutBtn />
      </Container>
    </main>
  );
}
