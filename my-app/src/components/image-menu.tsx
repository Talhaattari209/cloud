import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuShortcut,DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Menu from "./icons/menu";
import FolderPlus from "./icons/folder-plus";
import { AddtoAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallary/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResult }) {
    const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-12 h-12 p-0">
            {" "}
            <Menu />{" "}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-38">
          <DropdownMenuItem className="flex gap-2" asChild>
            {/* <User /> */}
            {/* <FolderPlus  />
            <span>Add to Albums</span> */}
            <AddtoAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
