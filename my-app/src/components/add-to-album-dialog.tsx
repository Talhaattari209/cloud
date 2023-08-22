import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FolderPlus from "./icons/folder-plus";
import { useState } from "react";
import { SearchResult } from "@/app/gallary/page";
import { addImageToAlbum } from "./actions";

export function AddtoAlbumDialog({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) {
  const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);
    
    function close() {
        onClose();
        setOpen(false);
    }
  return (
    <Dialog
      open={open}
          onOpenChange={(newOpenState) => {
            setOpen(newOpenState);      
            if (!newOpenState) {
                onClose();
            }
        
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FolderPlus />
          <span>Add to Albums</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To Album </DialogTitle>
          <DialogDescription>
            Type an Album you want to add this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="album-name"
              value={albumName}
              className="col-span-3"
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Albumname
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              onClose();
              setOpen(false);
              await addImageToAlbum(image, albumName);
            }}
            type="submit"
          >
            Add to Albums
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}