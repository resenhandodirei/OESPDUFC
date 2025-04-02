'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Entre em Contato</h2>
        <p className="mt-2 text-lg text-gray-600">Fale conosco para mais informações sobre nossos serviços.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">Nome</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Sobrenome</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">E-mail</label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Mensagem</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 cursor-pointer rounded-full bg-gray-200 p-1 ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out focus:ring-indigo-500"
              >
                <span className="sr-only">Concordar com os termos</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600">
              Ao continuar, você concorda com nossa {' '}
              <a href="#" className="font-semibold text-indigo-600">política de privacidade</a>.
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  )
}