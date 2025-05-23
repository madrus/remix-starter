import { logout } from '~/session.server'

import type { ActionFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const action = async ({ request }: ActionFunctionArgs) => logout(request)

export const loader = async () => redirect('/')
