import React from "react";
import UploadButton from "./upload-button";
import  cloudinary  from "cloudinary"; 
import GallaryGrid from "./gallary-grid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GallaryPage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image  ")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };



  return (
    <section>
      <div className=" px-4 pt-8">
        <div className="flex space-between px-4 py-6 w-full">
          <h1 className="text-4xl font-bold w-full">Gallary</h1>
          <UploadButton />
        </div>
        <GallaryGrid images={result.resources} />
      </div>
    </section>
  );
}
