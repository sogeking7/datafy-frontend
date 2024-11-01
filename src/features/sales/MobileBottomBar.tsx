"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomBar() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <nav className="sm:hidden fixed bottom-0 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] z-10 w-full h-[90px] bg-white dark:bg-gray-900 dark:border-gray-800 flex items-center justify-between px-4 md:px-6">
      <Link
        href="/"
        className="flex flex-col items-center w-full text-center py-2"
        prefetch={false}
      >
        <HomeIcon
          fill={isActive("/") ? "#3672A8" : "#999"}
          className="h-6 w-6"
        />
        <span
          className={`text-xs mt-2 font-semibold ${
            isActive("/") ? "text-[#3672A8]" : "text-[#999]"
          }`}
        >
          Главная
        </span>
      </Link>

      <Link
        href="/search"
        className="flex flex-col items-center w-full text-center py-2"
        prefetch={false}
      >
        <SearchIcon
          fill={isActive("/search") ? "#3672A8" : "#E9E9E9"}
          className="h-6 w-6"
        />
        <span
          className={`text-xs mt-2 font-semibold ${
            isActive("/search") ? "text-[#3672A8]" : "text-[#999]"
          }`}
        >
          Поиск
        </span>
      </Link>

      <Link
        href="/account"
        className="flex flex-col items-center w-full text-center py-2"
        prefetch={false}
      >
        <UserIcon
          fill={isActive("/account") ? "#3672A8" : "#E9E9E9"}
          className="h-6 w-6"
        />
        <span
          className={`text-xs mt-2 font-semibold ${
            isActive("/account") ? "text-[#3672A8]" : "text-[#999]"
          }`}
        >
          Профиль
        </span>
      </Link>
    </nav>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.0738C0 8.53965 8.44875 0 18.8708 0C23.8757 0 28.6755 2.00956 32.2145 5.5866C35.7534 9.16364 37.7416 14.0151 37.7416 19.0738C37.7416 29.608 29.2929 38.1477 18.8708 38.1477C8.44875 38.1477 0 29.608 0 19.0738ZM37.4293 34.4394L43.0496 38.9761H43.1472C44.2842 40.1254 44.2842 41.9887 43.1472 43.138C42.0101 44.2873 40.1666 44.2873 39.0296 43.138L34.3655 37.7926C33.9246 37.3485 33.6768 36.7452 33.6768 36.116C33.6768 35.4868 33.9246 34.8835 34.3655 34.4394C35.2159 33.5948 36.579 33.5948 37.4293 34.4394Z"
        fill={props.fill}
      />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.52718 18.7821V15.7152C6.52716 14.9381 7.14803 14.3067 7.91706 14.3018H10.7408C11.5133 14.3018 12.1395 14.9346 12.1395 15.7152V18.7732C12.1395 19.4472 12.6776 19.9951 13.3446 20H15.2711C16.1709 20.0023 17.0346 19.6428 17.6716 19.0007C18.3086 18.3586 18.6667 17.4867 18.6667 16.5775V7.86583C18.6667 7.13138 18.3445 6.4347 17.787 5.96349L11.2422 0.674267C10.0982 -0.250877 8.46423 -0.220991 7.35407 0.745383L0.950047 5.96349C0.366201 6.42081 0.0172444 7.11955 0 7.86583V16.5686C0 18.4637 1.52023 20 3.39554 20H5.27804C5.59919 20.0023 5.90799 19.875 6.1359 19.6464C6.36382 19.4177 6.492 19.1066 6.49199 18.7821H6.52718Z"
        fill={props.fill}
      />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.294 7.79105C17.294 10.7281 14.9391 13.0831 12 13.0831C9.0619 13.0831 6.70601 10.7281 6.70601 7.79105C6.70601 4.85402 9.0619 2.5 12 2.5C14.9391 2.5 17.294 4.85402 17.294 7.79105ZM12 22.5C7.66237 22.5 4 21.795 4 19.075C4 16.3539 7.68538 15.6739 12 15.6739C16.3386 15.6739 20 16.3789 20 19.099C20 21.82 16.3146 22.5 12 22.5Z"
        fill={props.fill}
      />
    </svg>
  );
}
