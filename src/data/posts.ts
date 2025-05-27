
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    id: "why-this-thing",
    title: "why this thing?",
    date: "2025-01-15",
    excerpt: "curiosity drives everything. this platform exists because i believe the most interesting conversations happen when passionate people connect around shared ambitions.",
    readTime: "3 min read",
    tags: ["purpose", "connection", "vision"],
    content: `
# why this thing?

people always ask me—why build this? why create another platform when linkedin exists? why not just network the "normal" way?

the answer is simple: **curiosity**.

## the problem with traditional networking

most networking feels transactional. you meet someone, exchange cards, connect on linkedin, and then... nothing. the conversation dies in the follow-up email. everyone's trying to "build their network" but nobody's actually building anything meaningful.

i've watched too many potentially incredible collaborations die because people couldn't find each other, or because the platforms we use prioritize follower counts over genuine connection.

## what i'm actually building

this isn't about me becoming some networking guru or building the next social media empire. this is about creating a space where:

- **builders find other builders** without the noise
- **ideas meet execution** through real relationships
- **ambitious people connect** around shared vision, not job titles
- **conversations lead to collaborations** that actually matter

## the bits advantage

being at bits pilani puts me in the middle of one of india's most innovative ecosystems. every day i'm around people building startups, creating art, launching businesses, pursuing research that could change industries.

but here's the thing—most of these incredible people never meet each other. the computer science student building an ai startup doesn't know about the mba student launching a sustainability venture. the artist creating breakthrough work doesn't connect with the entrepreneur who could help scale their vision.

## why now?

because the world is full of people with incredible ideas who just need the right connections to make them real. because too much potential gets wasted in isolation. because the future gets built by people who find each other and decide to build it together.

this platform exists to be the bridge. to be the place where "what if we..." conversations turn into "let's actually do this" partnerships.

## what happens next?

if you're reading this and thinking "this sounds interesting but..." then you're exactly who this is for. the people who see possibilities others miss. the ones who aren't afraid to take risks on ambitious projects.

let's find out what we can build together.

*this is just the beginning.*
    `
  }
];
