import Image from "next/image";
import SiderbarMenuItem from "./SiderbarMenuItem";
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div>
    
      <div className="" >
        <Image 
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png "
          width="50" height="50"
        ></Image>
      </div>
      
      <div>
        <SiderbarMenuItem text="Home" Icon={HomeIcon}/>
        <SiderbarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SiderbarMenuItem text="Notifications" Icon={BellIcon}/>
        <SiderbarMenuItem text="Messages" Icon={InboxIcon}/>
        <SiderbarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SiderbarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SiderbarMenuItem text="Profile" Icon={UserIcon}/>
        <SiderbarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>

      <button>Tweet</button>

      <div>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq2udQfsmcgo-4364nhPY-DPGid0hh8dg4g&usqp=CAU" alt="user-img"></img>
        <div>
          <h4>Okan Güler</h4>
          <p>@RamboOkan</p>
        </div>
        <DotsHorizontalIcon className="h-5"/>
      </div>

    </div>
  )
}