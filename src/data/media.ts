/** Remote media — swap later when real assets arrive. */
export const media = {
  heroThumb:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  founder:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  lifestyle:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  food:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  avatars: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80",
  ],
  transformations: [
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80",
  ],
  testimonialThumbs: [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  ],
  moneyBack: "/images/money-back.png",
  /** Real mentor photos (web-sized copies of /images/mentors originals). */
  team: {
    couple: "/images/team/uma-jagan-portrait.jpg",
    umaAward: "/images/team/uma-award.jpg",
    jaganAward: "/images/team/jagan-award.jpg",
    umaPortrait: "/images/team/uma-portrait.jpg",
    communityZoom: "/images/team/community-zoom.jpg",
    liveEvent: "/images/team/live-event.jpg",
    stage: [
      { src: "/images/team/stage-jagan-1.jpg", alt: "Jagan speaking on stage", pos: "50% 30%" },
      { src: "/images/team/stage-uma-1.jpg", alt: "Dr. Uma speaking on stage", pos: "52% 30%" },
      { src: "/images/team/stage-jagan-2.jpg", alt: "Jagan explaining diabetes and cholesterol on stage", pos: "46% 30%" },
      { src: "/images/team/stage-uma-2.jpg", alt: "Dr. Uma presenting on stage", pos: "50% 30%" },
    ],
  },
} as const;
