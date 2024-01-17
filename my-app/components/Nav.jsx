"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
export const Nav = () => {
  const userLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p className="logo_text">Promptopia</p>
        {/* Desktop navigation */}
        <div className="sm:flex hidden">
          {userLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </nav>
  );
};
