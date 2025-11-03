import React from 'react'
import { Modal } from '../ui/modal'
import { useModal } from '@/hooks/useModal';

const AddProduct = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="rounded-2xl border  border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <Modal
              isOpen={isOpen}
              onClose={closeModal}
              className="max-w-[700px] p-6 lg:p-10"
            >
              <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                <div>
                  <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">

                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Plan your next big moment: schedule or edit an event to stay on
                    track
                  </p>
                </div>
                <div className="mt-8">
                  <div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Event Title
                      </label>
                      <input
                        id="event-title"
                        type="text"
                        // value={eventTitle}
                        // onChange={(e) => setEventTitle(e.target.value)}
                        className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                      Event Color
                    </label>

                  </div>

                  <div className="mt-6">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Enter Start Date
                    </label>
                    <div className="relative">
                      <input
                        id="event-start-date"
                        type="date"
                        // value={eventStartDate}
                        // onChange={(e) => setEventStartDate(e.target.value)}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Enter End Date
                    </label>
                    <div className="relative">
                      <input
                        id="event-end-date"
                        type="date"
                        // value={eventEndDate}
                        // onChange={(e) => setEventEndDate(e.target.value)}
                        className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                  >
                    Close
                  </button>
                  <button
                    // onClick={handleAddOrUpdateEvent}
                    type="button"
                    className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                  >
                  </button>
                </div>
              </div>
            </Modal>
    </div>
  )
}

export default AddProduct