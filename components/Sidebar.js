import Image from "next/image";
import SiderbarMenuItem from "./SiderbarMenuItem";
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
    
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1" >
        <Image 
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png "
          width="50" height="50"
        ></Image>
      </div>
      
      <div className="mt-4 m4-2.5 xl:items-start">
        <SiderbarMenuItem text="Home" Icon={HomeIcon} active/>
        <SiderbarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SiderbarMenuItem text="Notifications" Icon={BellIcon}/>
        <SiderbarMenuItem text="Messages" Icon={InboxIcon}/>
        <SiderbarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SiderbarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SiderbarMenuItem text="Profile" Icon={UserIcon}/>
        <SiderbarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>

      <button className="bg-blue-400 text-white rounded-full  w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img 
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq2udQfsmcgo-4364nhPY-DPGid0hh8dg4g&usqp=CAU" 
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
          ></img>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Okan Güler</h4>
          <p className="text-gray-500">@RamboOkan</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>

    </div>
  )
}