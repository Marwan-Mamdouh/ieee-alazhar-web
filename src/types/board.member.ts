export interface boardMember {
  id: string;
  name: string;
  bio: string;
  position: string;
  memberType: "officer" | "branding" | "technical" | "operation";
  track: string;
  gender: "male" | "female";
  image_url: string;
  linkedin_url: string;
}
