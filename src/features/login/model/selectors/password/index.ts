import { State } from '@/app/providers/store-provider';

export const selectPassword = (state: State) => state?.login?.password || '';
