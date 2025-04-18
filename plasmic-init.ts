import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { 
  SupabaseProvider, 
  SupabaseProviderMeta,
  SupabaseUserGlobalContext,
  SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader,
  SupabaseUppyUploaderMeta,
  SupabaseStorageGetSignedUrl,
  SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase"

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "QbAiNbv5kib4KjpZG4FjG",
      token: "6UsGMQSG10kOOlfZLs7IEmLyoh2Gk4KB902gvO7xgpZyu2gyDpHpNbPImMlF35DsTdBVYNpAOjoUVSvT0eg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

//Register global context
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta)

//Register components
PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);
// PLASMIC.registerComponent(...);
