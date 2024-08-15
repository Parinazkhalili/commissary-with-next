const getBlurDataURL = () => {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB+AL8DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAHxABAQEBAQEAAgMBAAAAAAAAAAECEQMSEyExQVFh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAgEAAwT/xAAaEQEBAQEBAQEAAAAAAAAAAAAAARECMRIh/9oADAMBAAIRAxEAPwDgEBB1EQgwaow0CGgkMGNIMiMMNAkGKhoMASg0YYonAphL1uqJxJ0eqxhLKPUYzB1uoRmBmZ4owvTRl00NCw8EtGQ8gSHkFdaQZBkNIihwR43FQBYFSi3S9DpQKfrdJ9B9EKvR6l9D9KysoypTRppGV6PUpTSoR+j0nW6yvH6Mqcp5SwdVh8p5UyNKVSHkLk8FdNIaQIZFDjCzMWlpqS1UC0trWp60qU10H0ndEuyFf7Gac32M2qOmaPNOabPNMromjTSE0eaRVuj1KaHqK8eU+ahNKZ06Y4yujNWy58VbNGnF8qRLNUzRNSGJDCohW6FrMWp6p7UtVmLqo60bdQ3pUbW07sm9uffrxYNdP5Bno4b7z/TZ9pf7LBehnamduHHovjbE7M6PNObOlM6ZXRND9IzRvpFeJNLY05JpTGuV2ryT8d2NL4rj89OjGnOu8dWarmufOlc6A4tKbqU0b6RT9LaHS2oraqWqbVS3pmJvTm9NKb05vXSoj6+nHFv0ur/xT3328QWQawy2AxI6PL1veV2ee3mR0+Oz9ix6WNK505MaWzoVdM0b6QmjfSK8GbqmN9Q60rp9SuV516Hlt1Y08vz9OX9uzz9Brcu/Olc6ceNq52FdI6po3055s32JLfQXSX2F0zG1pLem1pLWmYu9OX10rvTl9tfqrg1y7vdUrMQszMzDD+d5okNn+Y6cxnd56XzXJ510ZqWFF5TfSUpuorxGZhBlvL1ubyosus9Dz9e/26M+jy8asWx7WfyFdZNelPQ024c+0/1SeiauOv7C7c/5G+2bFrtPWk7smtKNHenL63qutOfV6fMc+qmBmP5QG4LNOWYcz9tIfMPxLVvNbNRwrApSqyj0ko9QnlMzALMzMwy8PKmbKUubikppqz+yQRd5VJ6UfyJsiq/kC6Sbpxz6htaTas6xw69bgfJhMdL8jMmFk0JDSMLDafKkTyeDXTk0EBE3/9k="
}

const numberFormat = (number) => {
    return new Intl.NumberFormat().format(number);
}

const handleError = (message) => {
    if(typeof message === 'object'){
        const errors = [];
        Object.keys(message).map(key => {
            message[key].map(e => {
                errors.push(e)
            })
        }) 
    return errors.join();
    
    }
    return message;
}


const salePercent = (price, salePrice) => {
return Math.round(((price - salePrice)/ price) * 100) ;
}

export { getBlurDataURL, numberFormat, handleError, salePercent }