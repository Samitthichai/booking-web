"use client";

import { useState } from "react";

export function useDetailServices() {
  const [date, setDate] = useState<Date | undefined>(() => new Date());
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [conflict, setConflict] = useState(false);

  function handleSelectDate(next: Date | undefined) {
    setDate(next);
    setConflict(false);
  }

  function handleSelectTime(time: string) {
    setSelectedTime(time);
    setConflict(false);
  }

  function handleConfirm() {
    setConflict(true);
  }

  return {
    date,
    selectedTime,
    conflict,
    handleSelectDate,
    handleSelectTime,
    handleConfirm,
  };
}
