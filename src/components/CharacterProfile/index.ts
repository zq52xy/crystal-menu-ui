// [PROTOCOL]: Change this header when CharacterProfile exports change, then check CLAUDE.md.
// INPUT: CharacterProfile component and public types.
// OUTPUT: Re-exported character profile API.
// POS: Component package boundary.
export { CharacterProfile } from './CharacterProfile';
export type {
  CharacterProfileProps,
  CharacterProfileResource,
  CharacterProfileStat,
} from './CharacterProfile';
