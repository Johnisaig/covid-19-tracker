export default function numberWithCommas(params) {
  return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
