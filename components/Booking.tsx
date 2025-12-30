'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react'
import { format, addDays, startOfWeek, addWeeks, isSameDay, isPast, setHours, setMinutes } from 'date-fns'

interface BookingProps {
  setActiveSection: (section: string) => void
}

interface TimeSlot {
  time: string
  available: boolean
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const startHour = 9
  const endHour = 17
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute of [0, 30]) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      slots.push({
        time: timeString,
        available: Math.random() > 0.3, // 70% availability for demo
      })
    }
  }
  
  return slots
}

export default function Booking({ setActiveSection }: BookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    notes: '',
  })

  const today = new Date()
  const startDate = startOfWeek(today, { weekStartsOn: 1 })
  const weeksToShow = 4
  const dates: Date[] = []

  for (let week = 0; week < weeksToShow; week++) {
    for (let day = 0; day < 7; day++) {
      const date = addDays(addWeeks(startDate, week), day)
      if (!isPast(date) || isSameDay(date, today)) {
        dates.push(date)
      }
    }
  }

  const timeSlots = selectedDate ? generateTimeSlots() : []

  const services = [
    'Consultation',
    'Haircut',
    'Styling',
    'Color Treatment',
    'Beard Trim',
    'Full Service',
  ]

  const handleDateSelect = (date: Date) => {
    if (!isPast(date) || isSameDay(date, today)) {
      setSelectedDate(date)
      setSelectedTime(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && selectedTime && formData.name && formData.email) {
      // In a real app, you would send this to a backend API
      console.log('Booking submitted:', {
        date: selectedDate,
        time: selectedTime,
        ...formData,
      })
      setShowConfirmation(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false)
        setSelectedDate(null)
        setSelectedTime(null)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Consultation',
          notes: '',
        })
      }, 3000)
    }
  }

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book an Appointment
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a date and time that works best for you
          </p>
        </div>

        {showConfirmation ? (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600">
              Your appointment has been scheduled. We'll send you a confirmation email shortly.
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Select Date</h3>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {dates.map((date, index) => {
                    const isSelected = selectedDate && isSameDay(date, selectedDate)
                    const isToday = isSameDay(date, today)
                    const isPastDate = isPast(date) && !isToday
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        disabled={isPastDate}
                        className={`
                          aspect-square rounded-lg text-sm font-medium transition-all
                          ${isSelected
                            ? 'bg-primary-600 text-white shadow-lg scale-105'
                            : isToday
                            ? 'bg-primary-100 text-primary-700 border-2 border-primary-600'
                            : isPastDate
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-50 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                          }
                        `}
                      >
                        {format(date, 'd')}
                      </button>
                    )
                  })}
                </div>

                {selectedDate && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <h4 className="text-lg font-semibold text-gray-900">
                        Available Times for {format(selectedDate, 'EEEE, MMMM d')}
                      </h4>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`
                            py-2 px-3 rounded-lg text-sm font-medium transition-all
                            ${selectedTime === slot.time
                              ? 'bg-primary-600 text-white shadow-md'
                              : slot.available
                              ? 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                              : 'bg-gray-50 text-gray-400 cursor-not-allowed line-through'
                            }
                          `}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Booking Form */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Any special requests or notes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold text-white transition-all
                      ${selectedDate && selectedTime
                        ? 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

