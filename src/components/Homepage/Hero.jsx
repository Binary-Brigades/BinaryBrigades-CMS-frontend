import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

export default function Hero() {
    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
         const token = localStorage.getItem("authToken");
        console.log('Mytoken',token)
        try {
            const response = await fetch("https://portfolio-cms-nine.vercel.app/api/v1/project/getall", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("An error occurred", error);
        }
    }
    return (
      <div className="w-screen justify-center items-center flex ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 px-1 md:px-2 w-[90%] max-w-[780px] ">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
        </div>
      </div>
    );
}
