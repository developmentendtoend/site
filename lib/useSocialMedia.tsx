import { useEffect, useState } from "react";
import info from "@/info/socialMedias.json";

const useSocialMedia = () => {

  const [ allSocialMedia, setAllSocialMedia ] = useState<Array<any>>([]);

  const getAllIcons = () => {
    setAllSocialMedia([ ...info.data ]);
  }

  useEffect(() => {
    getAllIcons()
  }, []);

  return {
    allSocialMedia
  }
}

export default useSocialMedia;