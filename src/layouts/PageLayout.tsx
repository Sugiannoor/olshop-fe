import { logout } from "@/features/auth/api/logout";
import { Avatar, Menu, ActionIcon } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <>
      <header className=" bg-gray-100 px-6 py-4 border-b">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">MyLogo</div>

          {/* Profile and Cart */}
          <div className="flex items-center space-x-4">
            <ActionIcon variant="light" size="lg" className="text-gray-700">
              <IconShoppingCart size={24} />
            </ActionIcon>

            {/* Profile Menu */}
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  radius="xl"
                  size="md"
                  src="/vite.svg"
                  alt="Profile"
                  className="cursor-pointer"
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item>My Account</Menu.Item>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" onClick={() => logout()}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-4">
        <Outlet />
      </main>
    </>
  );
};
