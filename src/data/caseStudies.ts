export interface CaseStudy {
  t: string;      // Title
  n: 'gaming' | 'travel' | 'music' | 'entertainment'; // Niche
  d: string;      // Duration
  bv: string;     // Before Views
  av: string;     // After Views
  bl: string;     // Before Likes
  al: string;     // After Likes
  ber: string;    // Before Engagement Rate
  aer: string;    // After Engagement Rate
  g: string;      // Growth Percentage
  img: string;     // Public proof screenshot path (/proofs/case-NN.jpg)
}

export const nicheLabels: Record<string, string> = {
  all: "All Niches",
  gaming: "Gaming Longplay",
  travel: "Travel Vlog",
  music: "Music & Artists",
  entertainment: "Entertainment"
};

export const caseStudies: CaseStudy[] = [
  {t:"Nancy Drew: The Final Scene",n:"gaming",d:"7-Day",bv:"2K",av:"5.1K",bl:"650",al:"716",ber:"32.5%",aer:"14.1%",g:"+153.2%",img:"/proofs/case-01.jpg"},
  {t:"Nancy Drew: Stay Tuned for Danger",n:"gaming",d:"7-Day",bv:"2K",av:"4.9K",bl:"630",al:"730",ber:"31.5%",aer:"14.8%",g:"+146.2%",img:"/proofs/case-02.jpg"},
  {t:"Nancy Drew: Secrets Can Kill Remastered",n:"gaming",d:"7-Day",bv:"2.1K",av:"4.5K",bl:"373",al:"416",ber:"17.8%",aer:"9.2%",g:"+114.4%",img:"/proofs/case-03.jpg"},
  {t:"Nancy Drew: Secrets Can Kill",n:"gaming",d:"7-Day",bv:"2.1K",av:"5.1K",bl:"613",al:"726",ber:"29.2%",aer:"14.2%",g:"+142.9%",img:"/proofs/case-04.jpg"},
  {t:"Are Hugh Jackman & Sutton Foster Dating??",n:"entertainment",d:"7-Day",bv:"51",av:"2.4K",bl:"3",al:"26",ber:"5.9%",aer:"1.1%",g:"+4611.8%",img:"/proofs/case-05.jpg"},
  {t:"Nancy Drew Dossier: Resorting to Danger",n:"gaming",d:"7-Day",bv:"439",av:"2.6K",bl:"21",al:"389",ber:"4.8%",aer:"15.2%",g:"+483.1%",img:"/proofs/case-06.jpg"},
  {t:"Nancy Drew: Midnight in Salem",n:"gaming",d:"7-Day",bv:"688",av:"3K",bl:"3",al:"329",ber:"0.4%",aer:"10.9%",g:"+338.7%",img:"/proofs/case-07.jpg"},
  {t:"Ero Seagull – Andy Warhol's Toupee",n:"music",d:"30-Day",bv:"131",av:"15.5K",bl:"12",al:"938",ber:"9.2%",aer:"6.1%",g:"+11,712.2%",img:"/proofs/case-08.jpg"},
  {t:"Nancy Drew: Ghost Dogs of Moon Lake",n:"gaming",d:"7-Day",bv:"5.9K",av:"8.3K",bl:"870",al:"925",ber:"14.7%",aer:"11.2%",g:"+40.2%",img:"/proofs/case-09.jpg"},
  {t:"Nancy Drew: Treasure in the Royal Tower",n:"gaming",d:"7-Day",bv:"2.3K",av:"5K",bl:"900",al:"1K",ber:"39.1%",aer:"20.0%",g:"+117.8%",img:"/proofs/case-10.jpg"},
  {t:"Nancy Drew: Message in a Haunted Mansion",n:"gaming",d:"7-Day",bv:"2.3K",av:"5K",bl:"800",al:"840",ber:"34.8%",aer:"16.8%",g:"+117.8%",img:"/proofs/case-11.jpg"},
  {t:"Stray Dogs on Our Finca",n:"travel",d:"15-Day",bv:"21",av:"8.3K",bl:"0",al:"74",ber:"0.0%",aer:"0.9%",g:"+39,600.0%",img:"/proofs/case-12.jpg"},
  {t:"Nancy Drew: Danger on Deception Island",n:"gaming",d:"7-Day",bv:"1.5K",av:"3.9K",bl:"678",al:"652",ber:"45.2%",aer:"16.5%",g:"+162.8%",img:"/proofs/case-13.jpg"},
  {t:"Nancy Drew: The Secret of Shadow Ranch",n:"gaming",d:"7-Day",bv:"1.7K",av:"4.9K",bl:"623",al:"640",ber:"36.6%",aer:"13.2%",g:"+185.7%",img:"/proofs/case-14.jpg"},
  {t:"Emotional Goodbye to Andalusia",n:"travel",d:"7-Day",bv:"229",av:"2.5K",bl:"5",al:"28",ber:"2.2%",aer:"1.1%",g:"+978.6%",img:"/proofs/case-15.jpg"},
  {t:"Nancy Drew: The Deadly Device",n:"gaming",d:"7-Day",bv:"593",av:"3.6K",bl:"300",al:"346",ber:"50.6%",aer:"9.5%",g:"+512.6%",img:"/proofs/case-16.jpg"}
];
